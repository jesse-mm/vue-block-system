import { IAbstractTransitionComponent, IAbstractPageTransitionComponent } from 'vue-transition-component';

interface IAbstractBlockComponent extends IAbstractTransitionComponent {
	/**
	 * @public
	 * @property data
	 * @description The data added to the block component
	 */
	data: any;
	/**
	 * @public
	 * @property debugLabel
	 * @description if it's set to true it will show the debug label
	 */
	debugLabel: boolean;
	/**
	 * @public
	 * @property scrollId
	 * @description The unique id of the component so we can scroll to it
	 */
	scrollId: string;
	/**
	 * @public
	 * @property transitionInThreshold
	 * @description The threshold before we transition in the block component
	 */
	transitionInThreshold: number;
	/**
	 * @public
	 * @property inView
	 * @description A flag that keeps track if a block is in the view
	 */
	inView: boolean;
	/**
	 * @public
	 * @method getParentPage
	 * @description Method that returns the parent page of the current block component
	 * @returns {IAbstractPageTransitionComponent}
	 */
	getParentPage():IAbstractPageTransitionComponent;
	/**
	 * @public
	 * @method handleBlockComponentReady
	 * @description when a block component within a block component is ready it will trigger the component ready on
	 * the parent so that it get's added to the root scroll tracker
	 * @param component
	 */
	handleBlockComponentReady(component:IAbstractBlockComponent):void;
	/**
	 * @public
	 * @method addDebugLabel
	 * @description Method that generates the debug label and injects it into the DOM
	 */
	addDebugLabel():void;

}

export default IAbstractBlockComponent;
