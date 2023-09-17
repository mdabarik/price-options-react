import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": "1",
            "name": "Basic Plan",
            "price": 9.99,
            "features": [
                "Unlimited Bandwidth",
                "10GB Storage",
                "Up to 5 Users",
                "Email Support"
            ]
        },
        {
            "id": "2",
            "name": "Standard Plan",
            "price": 19.99,
            "features": [
                "Unlimited Bandwidth",
                "50GB Storage",
                "Up to 25 Users",
                "24/7 Phone and Email Support"
            ]
        },
        {
            "id": "3",
            "name": "Premium Plan",
            "price": 29.99,
            "features": [
                "Unlimited Bandwidth",
                "100GB Storage",
                "Unlimited Users",
                "24/7 Phone and Email Support",
                "Advanced Analytics"
            ]
        },
        // {
        //     "id": "4",
        //     "name": "Enterprise Plan",
        //     "price": 49.99,
        //     "features": [
        //         "Unlimited Bandwidth",
        //         "250GB Storage",
        //         "Unlimited Users",
        //         "24/7 Priority Phone and Email Support",
        //         "Custom Solutions",
        //         "Dedicated Account Manager"
        //     ]
        // }
    ];

    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best Prices in the Town</h2>
            <div className='grid md:grid-cols-3 gap-6 mt-6 '>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;