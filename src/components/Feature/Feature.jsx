
import PropTypes from 'prop-types';
import {BsFillCheckCircleFill} from 'react-icons/bs';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center mr-4'>
            <BsFillCheckCircleFill className='text-black'></BsFillCheckCircleFill>
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
}

export default Feature;