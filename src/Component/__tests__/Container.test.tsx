/**
* @jest-environment jsdom
*/

import "@testing-library/jest-dom"
import Container from "../Container"
import {render,screen} from "@testing-library/react"

describe("Container",() => {
    it("単一のHTML要素をchildrenとして受け取れるか",() => {
        render(<Container><p>test</p></Container>)
        expect(screen.getByTestId("Container")).toBeInTheDocument()
    })
    it("複数のHTML要素をchildrenとして受け取れるかどうか",() => {
        render(<Container><p>aaa</p><p>bbb</p></Container>)
        expect(screen.getByTestId("Container")).toBeInTheDocument()
    })
})