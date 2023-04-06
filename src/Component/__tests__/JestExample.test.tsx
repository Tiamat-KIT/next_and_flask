/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { Example } from "../JestExample";
import {render,screen} from "@testing-library/react"

describe("Example",() => {
    it("表示されるかどうか",()=>{
        render(<Example />)
        expect(screen.getByTestId("Example")).toBeInTheDocument()
    })
})