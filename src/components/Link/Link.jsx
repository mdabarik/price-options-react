import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-4 hover:bg-yellow-300 p-2">
            <a href={`route.path`}>{route.id}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;