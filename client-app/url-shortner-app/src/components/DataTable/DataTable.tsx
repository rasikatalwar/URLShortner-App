import * as React from 'react';
import { UrlData } from '../../interface/UrlData';
import { serverUrl } from '../../helpers/Constants';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface IDataTableProps {
    data: UrlData[];
    updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const { data, updateReloadState } = props;
    console.log("Data in DataTable is: ", data);

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`)
            .then(() => {
                console.log(`Copied to clipboard: ${serverUrl}/shortUrl/${url}`);
            })
            .catch(err => {
                console.error("Failed to copy to clipboard:", err);
            });
    };

    const deleteUrl = async (id: string) => {
        try {
            const response = await axios.delete(`${serverUrl}/shortUrl/${id}`);
            console.log(response);
            updateReloadState();
        } catch (error) {
            console.error("Failed to delete URL:", error);
        }
    };

    const renderTableData = () => {
        return data.map((item) => {
            return (
                <tr
                    key={item._id}
                    className='border-b text-gray-900 bg-gray-100 hover:bg-purple-50 transition duration-200'>
                    <td className='px-6 py-3 break-words'>
                        <Link to={item.fullUrl} target="_blank" rel="noreferrer noopener" className='text-blue-600 hover:underline'>
                            {item.fullUrl}
                        </Link>
                    </td>
                    <td className='px-6 py-3'>
                        <Link to={`${serverUrl}/shortUrl/${item.shortUrl}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className='text-blue-600 hover:underline'>
                            {item.shortUrl}
                        </Link>
                    </td>
                    <td className='px-6 py-3'>{item.clicks}</td>
                    <td className='px-6 py-3'>
                        <div className='flex content-center'>
                            <div
                                className='cursor-pointer px-2'
                                onClick={() => copyToClipboard(item.shortUrl)}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-gray-600 hover:text-gray-900 transition duration-200">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                                    />
                                </svg>
                            </div>
                            <div className='cursor-pointer px-2' onClick={() => deleteUrl(item._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-red-600 hover:text-red-900 transition duration-200">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className='container mx-auto pt-2 pb-10'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full table-fixed text-sm text-left rtl:text-right text-gray-700'>
                    <thead className='text-md uppercase text-white bg-purple-700'>
                        <tr>
                            <th scope='col' className='px-6 py-3 w-6/12'>
                                Full URL
                            </th>
                            <th scope='col' className='px-6 py-3 w-3/12'>
                                Short URL
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Clicks
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
