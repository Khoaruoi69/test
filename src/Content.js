import { useEffect, useInsertionEffect, useState, useRef, memo, useMemo } from "react";
// memo chỉ chạy khi có một thằng components thay đổi, nếu ko có thay đổi gì thì nó giữ nguyên ko thay đổi
/**
 * 1. memo() - > higher Order  Components(HOC)
 * 2. useCallback()
 * 
 * // Hooks
 * Hoc
 * Render props
 * @returns 
 */

function Content({count, onIncrease2}) {

  const [name,setName] = useState()
  const [price,setPrice] = useState()
  const [products,setProducts] = useState([])

  // useRef để đưa con trỏ chuột về ô input
   const nameRef = useRef()

  const handleSubmit=()=>{
    setProducts([...products,{
      name: name,
      price: +price
    }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }

  // When the product changes, the use changes.
  const total = useMemo(()=>{
    const results = products.reduce((results, product)=>{
      console.log('recalculation')
      return results + product.price;
    },0)
    return results;
  },[products])
  return (
    <div style={{padding:'10px 32px'}}>
      <input 
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={e=>setName(e.target.value)}
      />
      <br/>
      <input 
        value={price}
        placeholder="Enter price..."
        onChange={e=>setPrice(e.target.value)}
      />
      <br/>
      <button onClick={handleSubmit}> Add</button>
      <br/>
      Total:{total}
      <ul>
        {products.map((product,index)=>(
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>

    </div>
  );
}
export default memo(Content)
