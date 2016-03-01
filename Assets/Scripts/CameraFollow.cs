using UnityEngine;
using System.Collections;

public class CameraFollow : MonoBehaviour {

	public Transform target;
	public Transform target2;
	Camera myCam;
	public float m_speed = 0.1f;
	public bool ZoomToMap = true;
	private float Divider = 4f;
	private float WaitTime = 0.02f;
	public int World = 0;

	// Use this for initialization
	void Start () {
	
		myCam = GetComponent<Camera> ();
		StartCoroutine(ZoomDivider (false));

	}
	
	// Update is called once per frame
	void Update () {

		if (ZoomToMap)
			Divider = 2f;
		myCam.orthographicSize = (Screen.height / 100f) / Divider;

		if (target) {

			transform.position = Vector3.Lerp (transform.position, target.position, m_speed) + new Vector3(0, 0, -10);

		}
	}

	IEnumerator ZoomDivider (bool Zoom){

		if(World == 1)
		yield return new WaitForSeconds (14);
		if (World == 2)
			yield return new WaitForSeconds (2);
		//Player is now the target
		target = target2;
		ZoomToMap = Zoom; //Unlock zoom number
		int w = 0;
		for(w = 0; w < 100; w++)
		{
			yield return new WaitForSeconds(WaitTime);
			Divider += 0.02f;
		}
	}

	void SetDivider ( float D ){

		Divider = D;

	}

	void SetTarget ( Transform T){

		target = T;
	}
}
















