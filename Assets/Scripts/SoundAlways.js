#pragma strict

	public var sound2 : AudioClip;
	public var WaitTime : float = 0.5;
function Start () {
	
	while(true)
	{
		GetComponent.<AudioSource>().PlayOneShot (sound2);
		yield WaitForSeconds(WaitTime);
	}
}