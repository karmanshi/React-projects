import images1 from '../../images/image1.PNG'
import BaseConvertor from '../../images/BaseConvertor.PNG'
import Payment from '../../images/paymentReciept.PNG'
import simpleInterest from '../../images/SiCalculator.PNG'
import Todo from '../../images/Todo.PNG'
import StringAnalysis from '../../images/Capture.PNG'
import Expense from '../../images/Expenses.PNG'
import Dashboard from '../../images/Dashboard.PNG'
import Ecommerece from '../../images/ecommerece.PNG'
export const data =[
    {
        name: 'E-commerce',
        img : Ecommerece,
        description: 'This is E-commerce application. It allow admin to manage product and categories while users to purchase product. It uses api\'s to perform operation on data. ',
        url: 'https://new-ecommerce-fe.vercel.app/home'
    },
    {
        name: 'Expense-Tracker',
        img : Expense,
        description: 'This is application keep a track of all the expenditure done by the user. User can export the csv file of its records. It uses localstorage to store a data.',
        url: 'https://expenses-tracker-gray.vercel.app/'
    },
    {
        name: 'Admin-Dashboard',
        img : Dashboard,
        description: 'It is admin dashboard template to perform crud operations. It also uses localstorage to store the data locally',
        url: 'https://project-x-ten-roan.vercel.app/products/'
    },
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
        description: 'We can take track of task and update them. It also uses localstorage to store the data',
        url: '/todo/'
    },
    {
        name: 'Base-Convertor',
        img : BaseConvertor,
        description: 'It will perform calculation like binary to decimal, binary to hexadecimal, decimal to octal etc.',
        url: '/base-convertor/'
    },
]
