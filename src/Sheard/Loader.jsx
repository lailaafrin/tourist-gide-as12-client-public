import React from 'react';
import { DotLoader } from 'react-spinners';



const Loader = ({ smallHeight }) => {
    return (
        <div>
            <div
                className={` ${ smallHeight ? 'h-[250px]' : 'h-[70vh]' }
      flex 
      flex-col 
      justify-center 
      items-center `}
            >
                {/* <ScaleLoader size={100} color='red' /> */}
                <DotLoader color="#36d7b7" />

            </div>
        </div>
    );
};

export default Loader;