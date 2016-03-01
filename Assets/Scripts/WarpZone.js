#pragma strict

public var WarpTarget : Transform;
public var MapCenter : Transform;

function OnTriggerStay2D (other : Collider2D){

	if(Input.GetKeyDown(KeyCode.Space))
	{
		Debug.Log("COLLIDED");
		other.gameObject.transform.position = WarpTarget.position;
		Camera.main.transform.position = MapCenter.position - new Vector3(0,0,10);
	}
}