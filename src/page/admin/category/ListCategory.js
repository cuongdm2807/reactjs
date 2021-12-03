import React from 'react'
import { Link } from 'react-router-dom'

const ListCategory = ({categories, onDelete}) => {
    if (categories.length === 0) {
        return (
            <p>Dữ liệu trống</p>
        )
    } else {
      return (
        <div className="" >
                <Link to="add" className="uppercase">thêm</Link>
                <table className="items-center w-full bg-transparent border-collapse" >
                        <thead>
                            <tr>
                                <th
                                    className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    ID
                                </th>
                                <th
                                    className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Name
                                </th>
                                <th
                                    className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) =>
    
                                <tr className="text-left" key={index}>
    
                                    <th
                                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 ">
                                        {index}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        {category.name}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    <button className="mx-4 bg-red-300 text-white p-2 rounded-md" onClick={() => onDelete(category.id)}>Remove</button>
                                    <button className="mx-4 bg-green-400 text-white p-2 rounded-md"><Link className="mx-4" to={`${category.id}/edit`}>Edit</Link></button>
                                    </td>
                                        
                                    
    
                                </tr>
                            )}
    
                        </tbody>
                    </table>
        
        </div>
        
      );
     }
}

export default ListCategory
