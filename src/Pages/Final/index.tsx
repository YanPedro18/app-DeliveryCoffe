import { FinnalyContainer } from "./styles"
import imgFinally from "../../assets/Illustration.svg"
import { useContext, useEffect } from "react"
import { coffeContext } from "../../context"

function Final() {
  const {finallyCoffe} = useContext(coffeContext)

  useEffect(() => {
    finallyCoffe()
  }, [])
  
  return (
        <FinnalyContainer>
            <img src={imgFinally} alt="" />
            <h4>Compra concluída !</h4>
        </FinnalyContainer>
  )
}

export default Final