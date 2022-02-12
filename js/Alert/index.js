import CloseBtn from '../CloseBtn';

const defaultProps = {
	content: '<strong>Bold!</strong> Content.',
	closeBtn: CloseBtn()
}

const Alert = (props) => {
	const { content, closeBtn } = { ...defaultProps, ...props };

	return `
	<div class="alert alert-warning alert-dismissible fade show" role="alert">
		<strong>Holy guacamole!</strong> You should check in on some of those fields below.
		${ CloseBtn() }
	</div>
	`;
};

export default Alert;
