import React from 'react'
import img1 from '../assets/loyalLogo.png'
import img2 from '../assets/helpfulLogo.png'
import img3 from '../assets/flexibleLogo.png'

const Jumpstart = () => {
    const cardsData = [
        {
            id: 1,
            heading: "We're loyal",
            text: "We're trying to see how leadership behaviors affect employee motivation, and if the same behaviors in different",
            image:  img1 ,
        },
        {
            id: 2,
            heading: "We're helpful",
            text: "We're fanatics about initiative and constructive impact. Our team members are consistently rewarded...",
            image: img2 ,
        },
        {
            id: 3,
            heading: "We're flexible",
            text: "Employers that offer options as telecommuting or flexible work schedules can help employees have...",
            image:  img3 ,
        },
    ];
    return (
        <section className='bg-[#f8f8f8] p-10'>
            <h2 className="text-center mb-8 text-4xl font-bold">Jumpstart your business</h2>
            <div className='flex justify-center text-center lg:px-48'>Digital marketing agencies are businesses that use market research and develop digital marketing strategies to promote a company's service or product. They help companies develop, manage and implement a digital marketing strategy to</div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {cardsData.map((cards) => (
                    <div
                        key={cards.id}
                        className="p-6 transition-shadow duration-300"
                    >
                        <img
                            src={cards.image}
                            alt={cards.heading}
                            className="w-20 h-20  mx-auto mb-4 "
                        />
                        <h3 className="text-xl font-semibold text-center">{cards.heading}</h3>
                        <p className="text-gray-600 text-center mt-2">{cards.text}</p>
                    </div>
                ))}
            </div>

            <div>

            </div>
        </section>
    )
}

export default Jumpstart
