import React from 'react'
import { CardItem } from './CardItem'

function Featured() {
    return (
        <div className='min-h-screen flex flex-col gap-4 items-center justify-center mt-16 px-10 md:px-20'>

            <header className='flex flex-col gap-1 items-center justify-center'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent py-2'>Featured Campaigns</h1>
            <p className='text-gray-500'>Every campaign is verified and every rupee goes directly to those who need it most.</p>
            </header>

            {/* Cards */}
            <div className="py-8 flex gap-6">
              
                <CardItem
                    imageUrl="/bg.png"   // replace with real image
                    title="Help Fatima Fight Cancer"
                    description="A mother of three needs urgent chemotherapy treatment. Your support can give her a fighting chance."
                    raised={850000}
                    goal={1200000}
                    donors={234}
                    daysLeft={12}
                   
                />
              

                <CardItem
                    imageUrl="/bg4.png"   // replace with real image
                    title="Help Fatima Fight Cancer"
                    description="A mother of three needs urgent chemotherapy treatment. Your support can give her a fighting chance."
                    raised={850000}
                    goal={1200000}
                    donors={234}
                    daysLeft={12}
                />

                <CardItem
                    imageUrl="/pic3.jpg"   // replace with real image
                    title="Help Fatima Fight Cancer"
                    description="A mother of three needs urgent chemotherapy treatment. Your support can give her a fighting chance."
                    raised={850000}
                    goal={1200000}
                    donors={234}
                    daysLeft={12}
                />
                

            </div>
        </div>
    )
}

export default Featured
