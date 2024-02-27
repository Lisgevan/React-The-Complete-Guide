import Concept from "./Concept";
import conceptList from "../utils/consepts";

function ConceptsList() {
	return (
		<ul id="concepts">
			{conceptList.map(concept => (
				<Concept title={concept.title} image={concept.image} description={concept.description} />
			))}
		</ul>
	);
}

export default ConceptsList;
