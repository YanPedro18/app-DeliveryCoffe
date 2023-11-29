import { FinnalyContainer } from "./styles"
import imgFinally from "../../assets/Illustration.svg"

function Final() {
  return (
    <>
        <FinnalyContainer>
            <img src={imgFinally} alt="" />
            <h4>Compra concluída</h4>
        </FinnalyContainer>
    </>
  )
}

export default Final