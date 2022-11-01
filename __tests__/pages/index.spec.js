import React from "react"
import { render, screen} from "@testing-library/react"
import Index from '../../pages/index'

describe("Index Page", ()=>{
    it("rending a head", ()=>{
        render(<Index/>)
    })
    screen.debug();
    const heading = screen.getByRole('heading', {
        name: /welcome to next\.js!/i,
      })
    expect(heading).toBeInTheDocument()

})
