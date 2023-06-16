import React  from 'react'
import loading from './loading.gif'

// export class Spinner extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img  style={{width: "30px" , height: "auto"}} src={loading} alt="loading" />
//       </div>
//     )
//   }
// }

// export default Spinner

const Spinner = () => {
    return (
      <div className='text-center'>
        <img  style={{width: "30px" , height: "auto"}} src={loading} alt="loading" />
      </div>
    )
}

export default Spinner


