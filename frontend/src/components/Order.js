import React ,{useState,useEffect} from 'react'
import { LiaFileImportSolid } from "react-icons/lia";
import { BiRightArrow } from "react-icons/bi";
import { IoPrintOutline } from "react-icons/io5";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaShopify } from "react-icons/fa";
import '../App.css'


const products = [
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
    { orderNo: "#TKN20203456", customerName: "Abishek Dutt", city: "Banglore", date: "2024-02-21", orderValue: "0.00", status: "Pending", },
  ]

const Order = () => {
  const [selectedItem, setSelectedItem] = useState("Pending")
  const [selectedOption, setSelectedOption] = useState("Import")
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState(Array(products.length).fill(false));

  const [currentPage,setCurrentPage]=useState(1)
  const [recordsPerPage,setRecordsPerPage]=useState(10)
  const lastIndex=currentPage*recordsPerPage
  const firstIndex=lastIndex-recordsPerPage
  const records=products.slice(firstIndex,lastIndex)

  const npage=Math.ceil(products.length/recordsPerPage)
  const numbers=[...Array(npage+1).keys()].slice(1)

  const prePage=()=>{
    if(currentPage !== 1){
      setCurrentPage(currentPage-1)
    }
  }

  const changePage=(id)=>{
     setCurrentPage(id)
  }

  const nextPage=()=>{
      if (currentPage !== npage){
        setCurrentPage(currentPage+1)
      }
  }


  useEffect(() => {
    // Check if all checkboxes are checked
    const isAllChecked = checkedItems.every((item) => item);
    setIsCheckedAll(isAllChecked);
  }, [checkedItems]);

  const handleHeaderCheckboxChange = () => {
    setIsCheckedAll(!isCheckedAll);
    setCheckedItems(Array(products.length).fill(!isCheckedAll));
  };

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !checkedItems[index];
    setCheckedItems(newCheckedItems);
  };


  return (
    <div className='rightMainContainer'>
        <div className='items'>
          <button className={`${selectedItem === "Pending" ? "selectedItem" : "item"}`} onClick={() => setSelectedItem("Pending")}>Pending</button>
          <button className={`${selectedItem === "Accepted" ? "selectedItem" : "item"}`} onClick={() => setSelectedItem("Accepted")}>Accepted</button>
          <button className={`${selectedItem === "AWB Created" ? "selectedItem" : "item"}`} onClick={() => setSelectedItem("AWB Created")}>AWB Created</button>
          <button className={`${selectedItem === "Ready to ship" ? "selectedItem" : "item"}`} onClick={() => setSelectedItem("Ready to ship")}>Ready to ship</button>
          <button className={`${selectedItem === "Shipped" ? "selectedItem" : "item"}`} onClick={() => setSelectedItem("Shipped")}>Shipped</button>
          <button className={`${selectedItem === "Completed" ? "selectedItem" : "item"}`} onClick={() => setSelectedItem("Completed")}>Completed</button>
          <button className={`${selectedItem === "Cancelled" ? "selectedItem" : "item"}`} onClick={() => setSelectedItem("Cancelled")}>Cancelled</button>
        </div>
        <div className='tableContainer'>

          <div className='options'>
            <div>
              <button className={`${selectedOption === "Import" ? "selectedOption" : "option"}`} onClick={() => setSelectedOption("Import")}><LiaFileImportSolid />Import Orders</button>
              <button className={`${selectedOption === "Accept" ? "selectedOption" : "option"}`} onClick={() => setSelectedOption("Accept")}><BiRightArrow />Accept</button>
              <button className={`${selectedOption === "Print" ? "selectedOption" : "option"}`} onClick={() => setSelectedOption("Print")}><IoPrintOutline />Print</button>
            </div>
            <div>
              <button className='refresh'><HiOutlineRefresh />Refresh</button>
            </div>
          </div>

          <div className='table'>
            <table className="custom-table">
              <thead>
                <tr>
                  <th><input type='checkbox' checked={isCheckedAll}
                onChange={handleHeaderCheckboxChange}/></th>
                  <th>Channel</th>
                  <th>Order No</th>
                  <th>Customer Name</th>
                  <th>City</th>
                  <th>Date</th>
                  <th>Order Value</th>
                  <th>Status</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {records?.map((product, index) => (
                  <tr key={index} style={{marginRight:20}}>
                    <td><input type='checkbox'  checked={checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}/></td>
                    <td><FaShopify className='channelIcon'/></td>
                    <td><p className='orderNo'>{product.orderNo}</p></td>
                    <td>{product.customerName}</td>
                    <td>{product.city}</td>
                    <td>{product.date}</td>
                    <td>{product.orderValue}</td>
                    <td><button className='status'>{product.status}</button></td>
                    <td>
                      <select>
                        <option>xyz</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          <nav>
          <ul className='pagination'>
            <li className='page-item'>
              <a href='#' className='page-link' onClick={prePage}>{"<"}</a>
            </li>
            {
              numbers.map((n,i)=>(
                <li className={`page-item ${currentPage === n ? "active" :""}`} key={i}>
                  <a href='#' className='page-link' onClick={()=>changePage(n)}>
                 {n}
                  </a>
                </li>
              ))
            }
            <li className='page-item'>
              <a href='#' className='page-link' onClick={nextPage}>{">"}</a>
            </li>
            <li >
              <select className='pageselect' onChange={(e)=>setRecordsPerPage(e.target.value)}>
                <option value={5}>5/Page</option>
                <option value={10} selected>10/Page</option>
                <option value={15}>15/Page</option>
                <option value={20}>20/Page</option>
              </select>
            </li>
          </ul>
        </nav>

        </div>
      </div>
  )
}

export default Order