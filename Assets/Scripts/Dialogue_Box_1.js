#pragma strict

var Box1 : GameObject;

var StartUp : Dialogue_Type;

function OnTriggerEnter2D (other : Collider2D)
{
	Box1.SetActive(true);
	StartUp.StartingMethod();
	
}