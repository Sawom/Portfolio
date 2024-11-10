import React from 'react';
import ac1 from '../../images/academic/ac1.png';
import ac2 from '../../images/academic/ac2.png';
import ac3 from '../../images/academic/ac3.png';
import ac4 from '../../images/academic/ac4.png';
import ac5 from '../../images/academic/ac5.png';
import ac6 from '../../images/academic/ac6.png';
import ac7 from '../../images/academic/ac7.png';
import ac8 from '../../images/academic/ac8.png';
import ac9 from '../../images/academic/ac9.jpg';


const Academic = () => {
    return (
        <div>
            <div className='mx-auto container' >
            <div className='grid lg:grid-cols-3 gap-8  md:grid-cols-2' >
                {/* 1st */}
                <div className="card cardStyle bg-base-100 shadow-xl">
                    <figure><img src={ac5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Donkey Kong with Unity  </h2>    
                    </div>               
                </div>

                {/* 2nd */}
                <div className="card cardStyle bg-base-100 shadow-xl">
                    <figure><img src={ac1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Educational-Media with Django </h2>    
                    </div>               
                </div>
                {/* 3rd */}
                <div className="card cardStyle bg-base-100 shadow-xl">
                    <figure><img src={ac2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Food Network with Django </h2>    
                    </div>               
                </div>
                {/* 4th */}
                <div className="card cardStyle bg-base-100 shadow-xl">
                    <figure><img src={ac3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> A Banking management System with Java </h2>    
                    </div>               
                </div>
                {/* 5th */}
                <div className="card cardStyle bg-base-100 shadow-xl">
                    <figure><img src={ac4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Car Shop Management System with SQL </h2>    
                    </div>               
                </div>
                {/* 6th */}
                <div className="card cardStyle bg-base-100 shadow-xl">
                    <figure><img src={ac6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Conference Room Schedule System with Greedy Algorithm </h2>    
                    </div>               
                </div>
                {/* 7th */}
                <div className="card cardStyle bg-base-100 shadow-xl">
                    <figure><img src={ac7} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Banking System with CPP </h2>    
                    </div>               
                </div>
                {/* 8th */}
                <div className="card cardStyle bg-base-100 shadow-xl">
                    <figure><img src={ac8} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Number-Guessing-game with CPP </h2>    
                    </div>               
                </div>
                {/* 9th */}
                <div className="card cardStyle bg-base-100 shadow-xl">
                    <figure><img src={ac9} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Calender with C </h2>    
                    </div>               
                </div>

            </div>
        </div> 

        </div>
    );
};

export default Academic;