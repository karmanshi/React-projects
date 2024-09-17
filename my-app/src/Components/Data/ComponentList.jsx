import images1 from '../../images/image1.PNG'
import BaseConvertor from '../../images/BaseConvertor.PNG'
import Payment from '../../images/paymentReciept.PNG'
import simpleInterest from '../../images/SiCalculator.PNG'
import Todo from '../../images/Todo.PNG'
import StringAnalysis from '../../images/Capture.PNG'
export const data =[
    {
        name: 'Basic-Calculator',
        img : images1,
        description: 'It will perform the arithematic operation like addition, subtraction, multiplication, division and modulus on the given values.',
        url: '/basic-calculator/'
    },
    {
        name: 'Simple-Interest-Calculator',
        img : simpleInterest,
        description: 'It will calculate simple interest on the basis of given principal, rate and time.Correct validations are applied in the form.  ',
        url: '/si-calculator/'
    },
    {
        name: 'String-Analysis',
        img : StringAnalysis,
        description: 'It will perform analysis on the string like count words, character spaces, unique word and unique character.',
        url: '/string-analysis/'
    },
    {
        name: 'Reciept-Generator',
        img : Payment,
        description: 'It will generate reciept for the products that you have added on it. It store data in local storage.',
        url: '/reciept-generator/'
    },
    {
        name: 'Todo',
        img : Todo,
        description: 'It will add daily task and update the task.',
        url: '/todo/'
    },
    {
        name: 'Base-Convertor',
        img : BaseConvertor,
        description: 'It will perform calculation like binary to decimal, binary to hexadecimal, decimal to octal etc.',
        url: '/base-convertor/'
    },
]
