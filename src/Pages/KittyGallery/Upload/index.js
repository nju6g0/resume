import React, { useState, useRef, useEffect } from 'react';
import { from } from 'rxjs';

import { withAuthConsumer } from 'Context/Auth';
import { getUploadListAPI, postImagesUploadAPI } from 'apis/gallery';
import Loading from 'Component/Loading';
import GoHome from 'Component/GoHome';

import { BsImage } from 'react-icons/bs';
import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const GarellyUpload = ({ authData }) => {
    const fetchListener = useRef(null);
    const imgRef = useRef(null);
    const uploadRef = useRef(null);
    const { token } = authData;

    const [fileData, setFileData] = useState({
        name: '',
        blob: null,
        imgsrc: null,
    });
    const [isLoading, setIsLoading] = useState({
        list: true,
        button: false,
    });
    const [listData, setListData] = useState([]);

    const chooseImage = (e) => {
        const fileSizeLimit = (1024 * 1024) / 2;
        if (e.target.files[0]) {
            if (e.target.files[0].size < fileSizeLimit) {
                setFileData({
                    name: e.target.files[0].name,
                    blob: e.target.files[0],
                    imgsrc: URL.createObjectURL(e.target.files[0]),
                });
            } else {
                window.alert('檔案大小應小於500KB');
            }
        }
    };

    const uploadFile = () => {
        if (fileData.blob) {
            setIsLoading((prevState) => ({
                ...prevState,
                button: true,
            }));
            const formData = new FormData();
            formData.append('sub_id', fileData.name);
            formData.append('file', fileData.blob);
            fetchListener.current = from(postImagesUploadAPI(formData, token)).subscribe((res) => {
                if (res.status === 201) {
                    setFileData({
                        name: '',
                        blob: null,
                        imgsrc: null,
                    });
                } else {
                    window.alert('上傳失敗，請稍後再試');
                }
                setIsLoading((prevState) => ({
                    ...prevState,
                    list: true,
                    button: false,
                }));
            });
            uploadRef.current.value = null;
        }
    };

    useEffect(() => {
        const params = {
            params: {
                limit: 100,
                page: 0,
            },
        };
        fetchListener.current = from(getUploadListAPI(params, token)).subscribe((res) => {
            if (res.status === 200) {
                setListData([...res.data]);
                setIsLoading((prevState) => ({
                    ...prevState,
                    list: false,
                }));
            }
        });

        return () => {
            if (fetchListener.current) {
                fetchListener.current.unsubscribe();
            }
        };
    }, [isLoading.list]);

    return (
        <div className={cx('garellyUpload')}>
            <h5>MY UPLOAD</h5>
            <div className={cx('upload')}>
                <label style={{ display: 'none' }}>
                    選擇檔案：
                    <input ref={uploadRef} type="file" accept="image/jpeg, image/png" onChange={chooseImage} />
                </label>
                <p>{fileData.name}</p>
                <div className={cx('preview')}>
                    {fileData.imgsrc ? <img ref={imgRef} src={fileData.imgsrc} alt="" /> : <BsImage />}
                </div>
                <div className={cx('btns')}>
                    <button
                        type="button"
                        onClick={() => {
                            uploadRef.current.click();
                        }}
                        disabled={isLoading.button}
                    >
                        選擇檔案
                    </button>
                    <button type="button" disabled={!fileData.blob || isLoading.button} onClick={uploadFile}>
                        {isLoading.button ? 'loading...' : '上傳檔案'}
                    </button>
                </div>
            </div>
            <div className={cx('imgs')}>
                {isLoading.list ? (
                    <Loading />
                ) : (
                    listData.map((img) => (
                        <div key={img.id} className={cx('imgBox')}>
                            <img src={img.url} alt="" />
                        </div>
                    ))
                )}
            </div>
            <GoHome />
        </div>
    );
};

export default withAuthConsumer(GarellyUpload);
