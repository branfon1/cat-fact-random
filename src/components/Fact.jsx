import './Fact.css'
function Fact ({ text }) {
  return (
    <article className='fact-section'>
      <div className='fact-section--title'>
        <h1>What is cutie?</h1>
      </div>
      <p className='fact-section--text'>{text}</p>
      <img className='fact-section--img' src='/assets/cat-removebg-preview.png' alt='Cat orange presentation' />
    </article>
  )
}

export default Fact
