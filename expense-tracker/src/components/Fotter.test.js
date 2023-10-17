const { render, screen } = require("@testing-library/react")

import Fotter from "./Fotter"

describe("Fottter tests",()=>{
    test("Testig title fotter part",()=>{
        // Arrange
        render(<Fotter/>)
    
        // Act
    
        // Assert
        const titleOfTheFotter = screen.getByText("My expense tracker")
        expect(titleOfTheFotter).toBeInTheDocument()
    })
    test("Testig year fotter part",()=>{
        // Arrange
        render(<Fotter/>)
    
        // Act
    
        // Assert
        const yearOfTheFotter = screen.getByText("2023")
        expect(yearOfTheFotter).toBeInTheDocument()
    })
})

