import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';

// can see both volunteers and grandparents
function HomePage() {
        return (
            <>
                <div>
                    <h3>New Volunteer Opportunities</h3>
                    {/* display first 3 tasks w/o volunteer_id */}
                    <Link to='/tasks'>See More</Link>
                </div>
                <div>
                    <h3>My Volunteering</h3>
                    {/* display first 3?, if tasks are on profile, leads to profile */}
                    <Link to='/profile'>See More</Link>
                </div>
            </>
        );
}

export default HomePage;