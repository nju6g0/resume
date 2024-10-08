import React, { useState, useRef } from 'react';
import XLSX from 'xlsx';

import { withPopWindowConsumer } from 'Context/PopWindow';
import GoHome from 'Component/GoHome';
import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Naughty = () => {
    return <div className={cx('nauthty')}>你真調皮，檔案沒有任何內容哦！</div>;
};
const Excel = ({ popWindowData }) => {
    const uploadRef = useRef(null);
    const { openPopWindowFunc } = popWindowData;
    const colums = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const [tableData, setTableData] = useState([]);
    const [fileName, setFileName] = useState('');

    const readFile = (e) => {
        if (e.target.files.length > 0) {
            const files = e.target.files,
                f = files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const first_sheet_name = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[first_sheet_name];
                if (worksheet['!ref']) {
                    const index = worksheet['!ref'].indexOf(':');
                    const numArr = worksheet['!ref'].substring(index + 1).split('');
                    const numIndex = numArr.findIndex((el) => !isNaN(el));
                    const totalRow = +numArr.slice(numIndex).join('');

                    const datas = [];
                    for (let i = 1; i <= totalRow; i++) {
                        let data = {};
                        colums.forEach((el) => {
                            const key = el + i;
                            data[el] = worksheet[key]?.v || '';
                        });
                        datas.push(data);
                    }
                    setTableData(datas);
                    setFileName(f.name);
                } else {
                    openPopWindowFunc({
                        popContent: <Naughty />,
                    });
                }
            };
            reader.readAsArrayBuffer(f);
        }
    };
    const downloadFile = () => {
        const wb = XLSX.utils.book_new();
        const ws_name = 'SheetJS';
        const ws_data = [
            ['書名', 'ISBN', '作者', '分類', '內容簡介'],
            [
                '在森崎書店的日子',
                '9789869481939',
                '八木澤里志',
                '日本文學/文學小說',
                '★★ 在這個愈愛愈孤獨的年代，我們都需要追尋幸福的勇氣！ ★★以東京神保町書街為舞台，記敘一名年輕女子逃離職場與情場、進入二手書店與一群「特別的人」往來生活的溫柔日常故事。',
            ],
            [
                '時生',
                '9789866043086',
                '東野圭吾',
                '日本懸疑/推理小說',
                '兒子回到過去拯救不成材的老爸？穿梭於過去、現在、未來超越時空的父子情日本讀者一致推薦，東野十大人氣長篇之一！若你看過《祕密》、《紅色手指》，絕不能錯過又一部東野流探討親子關係的感人作品！',
            ],
        ];
        const ws = XLSX.utils.aoa_to_sheet(ws_data);
        XLSX.utils.book_append_sheet(wb, ws, ws_name);
        XLSX.writeFile(wb, 'sample.xlsx');
    };

    return (
        <div className={cx('excel')}>
            <div className={cx('container')}>
                <div>
                    <span>檔案名稱：{fileName}</span>
                    <button
                        type="button"
                        onClick={() => {
                            uploadRef.current.click();
                        }}
                    >
                        選擇檔案
                    </button>
                    <button type="button" onClick={downloadFile}>
                        下載範本
                    </button>
                    <input
                        ref={uploadRef}
                        type="file"
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        onChange={readFile}
                    />
                </div>
                <div className={cx('fakeTable')}>
                    <div className={cx('tHead')}>
                        <span>{tableData[0]?.A}</span>
                        <span>{tableData[0]?.B}</span>
                        <span>{tableData[0]?.C}</span>
                        <span>{tableData[0]?.D}</span>
                        <span>{tableData[0]?.E}</span>
                    </div>
                    {tableData.slice(1).map((tr, idx) => (
                        <div key={idx} className={cx('tBody')}>
                            <span>{tr.A}</span>
                            <span>{tr.B}</span>
                            <span>{tr.C}</span>
                            <span>{tr.D}</span>
                            <span>{tr.E}</span>
                        </div>
                    ))}
                </div>
            </div>
            <GoHome />
        </div>
    );
};

export default withPopWindowConsumer(Excel);
