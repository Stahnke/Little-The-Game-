using UnityEngine;
using System.Collections;

public class PlayerMove : MonoBehaviour {

	Rigidbody2D rbody;
	Animator anim;
	private bool MovementAllowed = true;
	// Use this for initialization
	void Start () {
	
		rbody = GetComponent<Rigidbody2D> ();
		anim = GetComponent<Animator> ();
	}
	
	// Update is called once per frame
	void Update () {

		if (MovementAllowed) {
			Vector2 movement_vector = new Vector2 (Input.GetAxisRaw ("Horizontal"), Input.GetAxisRaw ("Vertical"));

			if (movement_vector != Vector2.zero) {
				anim.SetBool ("isWalking", true);
				anim.SetFloat ("input_x", movement_vector.x);
				anim.SetFloat ("input_y", movement_vector.y);
			} else {
				anim.SetBool ("isWalking", false);
			}
			rbody.MovePosition (rbody.position + movement_vector * Time.deltaTime);
		}
	}

	void StopMovement(){

		MovementAllowed = false;
	}

	void StartMovement(){

		MovementAllowed = true;
	}
}














