import { FormInput } from "./Inputs/FormInput/FormInput";
import { RadioInput } from "./Inputs/RadioInput/RadioInput";
import { SelectInput } from "./Inputs/SelectInput/SelectInput";
import styles from "./SectionInputs.module.css";

export const SectionInputs = () => {
	return (
		<div className={styles.SectionInputsContainer}>
			<SelectInput />
			<RadioInput />
			<FormInput />
		</div>
	);
};
