import { useState } from 'react'
function Example3() {
  const [count, setCount]=useState(0)
  return (
    <div className='counter'>
      <img src='https://images.pexels.com/photos/4855422/pexels-photo-4855422.jpeg?cs=srgb&dl=pexels-cottonbro-4855422.jpg&fm=jpg' alt='Hand holding an orange pen over a notebook on a desk, surrounded by papers and a cup, suggesting a focused and studious atmosphere' />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at repudiandae, sapiente tempore, nesciunt tenetur, adipisci ipsam vel possimus nulla voluptate veniam perspiciatis atque. Eum repellat nobis minus dolore ducimus atque placeat commodi dolorum qui accusantium. Incidunt quas nesciunt ex, expedita sequi aut iste necessitatibus dolorem consequatur natus, ipsam magnam laudantium eaque. Quisquam ad deserunt sit, explicabo minima possimus reprehenderit officia commodi, veritatis deleniti ut. Quisquam, recusandae omnis autem animi, sint quo ipsa porro aut aliquid error asperiores adipisci. Cum illo praesentium tenetur, beatae consequuntur id explicabo quidem aperiam culpa? Illo nobis tenetur hic nulla ullam nesciunt et, numquam necessitatibus?</p><hr></hr>
      <h1>Counter : {count}</h1>
      <ul>
        <button><li onClick={()=>setCount(count+1)}>like</li></button>
        <button><li onClick={()=>setCount(count-1)}>Unlike</li></button>
        <button><li onClick={()=>setCount(0)}>reset</li></button>
      </ul>
    </div>
  )
}

export default Example3
