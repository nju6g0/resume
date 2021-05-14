import React, { useState, useRef, useEffect } from 'react';
import XLSX from 'xlsx';

const Movies = () => {
    const colums = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const [tableData, setTableData] = useState([]);

    const readFile = (e) => {
        console.log(e.target.files);
        var files = e.target.files,
            f = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, { type: 'array' });
            console.log(workbook);
            /* DO SOMETHING WITH workbook HERE */
            var first_sheet_name = workbook.SheetNames[0];
            var address_of_cell = 'A1';

            /* Get worksheet */
            var worksheet = workbook.Sheets[first_sheet_name];

            /* Find desired cell */
            var desired_cell = worksheet[address_of_cell];

            /* Get the value */
            var desired_value = desired_cell ? desired_cell.v : undefined;
            const index = worksheet['!ref'].indexOf(':');
            console.log(Object.keys(worksheet).length);
            console.log(
                `start = ${worksheet['!ref'].substring(0, index)} / end = ${worksheet['!ref'].substring(index + 1)}`
            );
            console.log(index);
            const numArr = worksheet['!ref'].substring(index + 1).split('');
            const numIndex = numArr.findIndex((el) => !isNaN(el));
            const totalRow = +numArr.slice(numIndex).join('');
            console.log(totalRow);

            const datas = [];
            for (let i = 1; i <= totalRow; i++) {
                let data = {};
                colums.forEach((el) => {
                    const key = el + i;
                    data[el] = worksheet[key]?.v || '';
                });
                datas.push(data);
            }
            console.log(datas);
            setTableData(datas);
            var container = document.getElementById('tableau');
            container.innerHTML = XLSX.utils.sheet_to_html(worksheet);
            const json = XLSX.utils.sheet_to_json(worksheet);
            console.log(json);
        };
        reader.readAsArrayBuffer(f);
    };
    const downloadFile = () => {
        var wb = XLSX.utils.book_new();
        var ws_name = 'SheetJS';
        /* make worksheet */
        var ws_data = [
            [
                '部門',
                '部門額度',
                '單趟最高額度',
                '搭乘最高趟次',
                '一',
                '二',
                '三',
                '四',
                '五',
                '六',
                '日',
                '起始時間',
                '結束時間',
            ],
            ['專案管理部', 2000, 200, 10, 'V', 'V', 'V', 'V', 'V', '', '', '09:00', '18:00'],
            ['管理部', '', 200, 12, 'V', 'V', 'V', '', '', '', '', '09:00', '18:00'],
            ['總務部', 3000, '', 10, '', '', '', 'V', 'V', 'V', '', '09:00', '18:00'],
        ];
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        /* Add the worksheet to the workbook */
        XLSX.utils.book_append_sheet(wb, ws, ws_name);
        XLSX.writeFile(wb, 'sample.xlsx');
    };

    return (
        <div>
            Movies
            <br />
            <input type="file" onChange={readFile} />
            <button type="button" onClick={downloadFile}>
                download
            </button>
            <div id="tableau"></div>
            <table class="table">
                <thead>
                    {tableData.slice(0, 1).map((th) => (
                        <tr>
                            <th scope="col">{th.A}</th>
                            <th scope="col">{th.B}</th>
                            <th scope="col">{th.C}</th>
                            <th scope="col">{th.D}</th>
                            <th scope="col">{th.E}</th>
                            <th scope="col">{th.F}</th>
                            <th scope="col">{th.G}</th>
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {tableData.slice(1).map((td) => (
                        <tr>
                            <th scope="row">{td.A}</th>
                            <td>{td.B}</td>
                            <td>{td.C}</td>
                            <td>{td.D}</td>
                            <td>{td.E}</td>
                            <td>{td.F}</td>
                            <td>{td.G}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Movies;
