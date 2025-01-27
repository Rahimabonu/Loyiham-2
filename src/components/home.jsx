import Couter from "./couter"
import Todo from "./todo"
const Home = () => {
  return (
    <div className="home-container">
        <h1 className="home-title">Mening loyihalarim</h1>
        <Todo/>
        <Couter/>
    </div>
  )
}

export default Home