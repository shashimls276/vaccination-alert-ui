/**
 * 
 */
package in.javakids.vaccinationalert.model;

/**
 * @author ab68478
 *
 */
public class State {
	private int state_id;
	private String state_name;

	public State() {

	}

	public State(int state_id, String state_name) {
		this.state_id = state_id;
		this.state_name = state_name;
	}

	/**
	 * @return the state_id
	 */
	public int getState_id() {
		return state_id;
	}

	/**
	 * @param state_id the state_id to set
	 */
	public void setState_id(int state_id) {
		this.state_id = state_id;
	}

	/**
	 * @return the state_name
	 */
	public String getState_name() {
		return state_name;
	}

	/**
	 * @param state_name the state_name to set
	 */
	public void setState_name(String state_name) {
		this.state_name = state_name;
	}

}
