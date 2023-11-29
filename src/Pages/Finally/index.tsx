import { FinnalyContainer } from "./styles"
import imgFinally from "../../assets/Illustration.svg"

function Finally() {
  return (
    <div>

        <FinnalyContainer>
            <img src={imgFinally} alt="" />
            <h4>Compra concluída</h4>
        </FinnalyContainer>
    </div>
  )
}

export default Finally