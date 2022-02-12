const defaultProps = {
	ariaLabel: "Close",
	classes: "close",
	label: "&times;",
	overrideClasses: false,
};

const defaultClasses = "close";

const CloseBtn = (props) => {
	const { ariaLabel, classes, label, classOverride } = { ...defaultProps, ...props };

	if (!overrideClasses) {
		classes += ` ${ defaultClasses }`;
	}

	return `
		<button type="button" class="${ classes }" data-dismiss="alert" aria-label="${ ariaLabel }">
			<span aria-hidden="true">${ label }</span>
		</button>
	`;
};

export default CloseBtn;
