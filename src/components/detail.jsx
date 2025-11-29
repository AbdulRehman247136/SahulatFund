import React from 'react'

import { CardItem } from './CardItem'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Dock } from 'lucide-react'


function Detail() {
  return (

    <div className='mx-15.5 my-20.5'>
        <div className='flex flex-wrap'>
            <img src="bg.png" alt="" className='rounded-4xl w-190 h-120' />
            <CardItem 
                raised={850000}
                goal={1200000}
                >

                </CardItem>

        </div>

        <button className='px-0.5 py-0.5 bg-blue-500 rounded-3xl text-[13px] text-white'>Medical Emergency</button>
        <br />
        <br />
        <h2 className='text-4xl'>Help 8-Year-Old Fatima Fight Cancer</h2>
        <div className='text-gray-500 flex flex-wrap gap-3.5 text-sm'><p>By Ahmed Khan </p> <p> •   Lahore,Pakistan</p></div>


        <br />
        <div className='border-t border-gray-500 w-200'>
            <h3 className='text-3xl font-semibold mt-4'>Story</h3>
            <br />
            <p className='text-lg'>
            Fatima is a bright, cheerful 8-year-old who loves drawing and playing with her younger brother.
             Three months ago, her world turned upside down when she was diagnosed with acute lymphoblastic leukemia.
            <br /><br />

            Her father works as a taxi driver, and her mother is a homemaker. The family has already spent their life
             savings on initial tests and consultations. The cost of chemotherapy, medications, and hospital care is 
             far beyond what they can afford.
            <br /><br />
            Every day counts in Fatima's battle. Your contribution, no matter how small, brings her one step closer to
             recovery. The family has consulted with specialists at Shaukat Khanum Memorial Hospital, and with proper 
             treatment, Fatima has an excellent chance of full recovery.
            <br /><br />
            Please help us give Fatima the childhood she deserves. Your generosity can restore hope to this family and
             save a precious life.
            <br /><br />
            </p>
           
            
            </div>
            <div className='border-t border-gray-500 w-200'>
            <h3 className='text-3xl font-semibold mt-4'>Verification and Documents</h3>
           
      
        <br />  
        <Card  className=" h-43 bg-green-100 ">
          <div className='mx-2 my-2 text-sm gap-2 flex-col '>
            <h2>This Campaign has been Verified</h2>
            <p className='text-sm text-gray-500 ml-5 mb-2'>All medical documents and identity proofs have been authenticated by our team</p>
          <div className='flex'>
          <Dock />
           <p className='mb-2'> Medical Reports -Shaukat Khanum Hospital</p>
           </div>
           <div className='flex'>
           <Dock />
          <p className='mb-2'>Doctor's Treatment Plan</p>
          </div>
          <div className='flex'>
          <Dock />
          <p className='mb-2'>Cost Estimate Letter</p>
          </div>
          <div className='flex'>
          <Dock />
          <p>Finanical Income Certificate</p>
          </div>
          
          </div>

        </Card>
        

            </div>



        
    </div>
  )
}

export default Detail