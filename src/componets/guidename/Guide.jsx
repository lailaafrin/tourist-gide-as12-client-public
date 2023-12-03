import React from 'react';

const Guide = () => {
    const [ params, setParams ] = useSearchParams();
    const category = params.get('category')
    return (
        <div className='pt-4 flex items-center justify-between overflow-x-auto'>
            {categories.map(item =>

                <CategoryBox
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    selected={category === item.label}
                ></CategoryBox>
            )}
        </div>
    );
};

export default Guide;