import PropTypes from 'prop-types';
import { Button } from './feedback.styled';
import { useState } from 'react';


function FeedbackOptions() {
    const [options, onLeaveFeedback] = useState()
    return (
    <div>
            {options.map(option => (
        <Button onClick={onLeaveFeedback}
            key={option}
            name={option}
        >
            {option}
        </Button>
        ))}

    </div>
    );
};  

FeedbackOptions.propTypes = {
    options: PropTypes.string.isRequired,
};

export default FeedbackOptions;
