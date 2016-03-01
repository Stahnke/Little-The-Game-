#pragma strict

public var PlayerObject : GameObject;
public var AllObjects : GameObject[];
public var RenderSpeed : float = 100;
private var i : int = 0;
private var w : int = 0;
public var LoadingText : GameObject;

function Start () {
	
	GameObject.Find("Player").SendMessageUpwards("StopMovement");
	for(i = 0; i < AllObjects.Length; i++)
	AllObjects[i].GetComponent.<MeshRenderer>().sharedMaterials[0].color.a = 0f;
	PlayerObject.GetComponent.<SpriteRenderer>().color.a = 0f;
	FadeIn();
}

function FadeIn () {
	
	for(w = 0; w < RenderSpeed; w++)
	{
		PlayerObject.GetComponent.<SpriteRenderer>().color.a += 1 / RenderSpeed;
		yield WaitForSeconds (1 / RenderSpeed);
	}
	w = i = 0;
	for(i = 0; i < AllObjects.Length; i++)
	{
		for(w = 0; w < RenderSpeed; w++)
		{
			AllObjects[i].GetComponent.<MeshRenderer>().sharedMaterials[0].color.a += 1 / RenderSpeed;
			yield WaitForSeconds (1 / RenderSpeed);
		}
	}
	GameObject.Find("Player").SendMessageUpwards("StartMovement");
}