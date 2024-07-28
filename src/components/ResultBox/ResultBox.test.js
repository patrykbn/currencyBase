import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Component ResultBox', () => {

    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
      });

    it('should render proper info about conversion when PLN -> USD', () => {
        const testCases =[
            { from:"PLN", to:"USD", amount: 100 , result: 'PLN 100.00 = $28.57'},
            { from:"PLN", to:"USD", amount: 50 , result: 'PLN 50.00 = $14.29'},
            { from:"PLN", to:"USD", amount: 10 , result: 'PLN 10.00 = $2.86'},
            { from:"PLN", to:"USD", amount: 1 , result: 'PLN 1.00 = $0.29'},
        ]

        for ( const testObj of testCases){

        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);

        const output = screen.getByTestId('output');

        expect(output).toHaveTextContent(testObj.result);

        cleanup();
        }
        });
    
    it('should render proper info about conversion when USD -> PLN', () => {
        const testCases =[
            { from:"USD", to:"PLN", amount: 100 , result: '$100.00 = PLN 350.00'},
            { from:"USD", to:"PLN", amount: 50 , result: '$50.00 = PLN 175.00'},
            { from:"USD", to:"PLN", amount: 10 , result: '$10.00 = PLN 35.00'},
            { from:"USD", to:"PLN", amount: 1 , result: '$1.00 = PLN 3.50'},
        ]

        for ( const testObj of testCases){

        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);

        const output = screen.getByTestId('output');

        expect(output).toHaveTextContent(testObj.result);

        cleanup();
        }
        });

    it('should render proper info about conversion when currency is the same USD->USD or PLN->PLN', () => {
        const testCases =[
            { from:"USD", to:"USD", amount: 100 , result: '$100.00 = $100.00'},
            { from:"USD", to:"USD", amount: 50 , result: '$50.00 = $50.00'},
            { from:"PLN", to:"PLN", amount: 100 , result: 'PLN 100.00 = PLN 100.00'},
            { from:"PLN", to:"PLN", amount: 50 , result: 'PLN 50.00 = PLN 50.00'},
        ]

        for ( const testObj of testCases){

        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);

        const output = screen.getByTestId('output');

        expect(output).toHaveTextContent(testObj.result);

        cleanup();
        }
        });

    it('should render proper info when amount is less then 0 (zero)', () => {
        const testCases =[
            { from:"USD", to:"USD", amount: -100 , result: 'Wrong value...'},
            { from:"USD", to:"PLN", amount: -50 , result: 'Wrong value...'},
            { from:"PLN", to:"USD", amount: -100 , result: 'Wrong value...'},
            { from:"PLN", to:"PLN", amount: -50 , result: 'Wrong value...'},
        ]

        for ( const testObj of testCases){

        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);

        const output = screen.getByTestId('output');

        expect(output).toHaveTextContent(testObj.result);

        cleanup();
        }
        });
        
});