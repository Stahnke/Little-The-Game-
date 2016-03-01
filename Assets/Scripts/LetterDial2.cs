using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class LetterDial2 : MonoBehaviour {

	//Public Fields
	public bool DEBUG = true;
	public int A_SIZE = 5;
	public int LANG_SIZE = 26;
	public char[] password;
	public char[] language;
	public AudioClip KeyHit;
	public AudioClip ChangeColumn;
	public AudioClip Success;
	public AudioClip Cheer;
	public GameObject[] LetterPositions;

	//Private Fields
	int j = 0;
	int k = 0;
	int f = 0;
	int f2 = 0;
	char[,] LetterArray;
	int[] PlaceHolder;
	Text[] textValue;
	public GameObject DownArrow;
	AudioSource source;

	// Use this for initialization
	void Start () {

		GameObject canvas = GameObject.Find("Canvas");
		textValue = canvas.GetComponentsInChildren<Text>();
		source = GetComponent<AudioSource> ();

		LetterArray = new char[A_SIZE, LANG_SIZE];
		PlaceHolder = new int[LANG_SIZE];

		for (f = 0; f < LANG_SIZE; f++)
			PlaceHolder[f] = 0;

		for(f = 0; f < A_SIZE; f++)
		{
			for (f2 = 0; f2 < LANG_SIZE; f2++)
				LetterArray[f,f2] = language[f2];
		}

		if (DEBUG) {
			for (f = 0; f < A_SIZE; f++) {
				for (int k = 0; k < LANG_SIZE; k++) {
					Debug.Log(f + " " + LetterArray [f, k]);
				}
			}
		}
	}

	
	// Update is called once per frame
	void Update () {

		if (Input.GetKeyDown (KeyCode.RightArrow)) {
			if (j < A_SIZE - 1) {
				j++;
			} else {
				j = 0;
			}

			DownArrow.transform.position = LetterPositions[j].transform.position + new Vector3(0, 50, 0);
			source.PlayOneShot (ChangeColumn);

			if (DEBUG)
				Debug.Log ("Right " + j + " " + LetterArray [j, k]);
		} 

		else if (Input.GetKeyDown (KeyCode.LeftArrow)) {
			if (j > 0) {
				j--;

			} else {
				j = (A_SIZE - 1);
			}

			DownArrow.transform.position = LetterPositions[j].transform.position + new Vector3(0, 50, 0);
			source.PlayOneShot (ChangeColumn);

			if (DEBUG)
				Debug.Log ("Left " + j + " " + LetterArray [j, k]);
		} 

		else if (Input.GetKeyDown (KeyCode.UpArrow)) {
			if (PlaceHolder [j] > 0)
				PlaceHolder [j]--;
			else
				PlaceHolder [j] = (LANG_SIZE - 1);

			k = PlaceHolder [j];
			textValue [j].text = LetterArray [j, k].ToString ();

			source.PlayOneShot (KeyHit);
			
			if (DEBUG)
				Debug.Log ("Up " + k + " " + LetterArray [j, k] + "textValue = " + textValue [j].text);
		} 

		else if (Input.GetKeyDown (KeyCode.DownArrow)) {
			if (PlaceHolder [j] < (LANG_SIZE - 1))
				PlaceHolder [j]++;
			else
				PlaceHolder [j] = 0;

			k = PlaceHolder [j];
			textValue [j].text = LetterArray [j, k].ToString ();

			source.PlayOneShot (KeyHit);
			
			if (DEBUG)
				Debug.Log ("Down " + k + " " + LetterArray [j, k] + "textValue = " + textValue [j].text);
		} 

		else if (Input.GetKeyDown (KeyCode.Space)) {

			bool wrong_pass = false;

			for(int m = 0; m < A_SIZE; m++)
			{
				if(wrong_pass == true)
					break;
				if(LetterArray [0, PlaceHolder [m]] != password[m])
					wrong_pass = true;
			}
			if(wrong_pass == false)
			{
				if (DEBUG)
					Debug.Log ("CONGRATS");

				textValue [LetterPositions.Length].color = new Color (0f, 1f, 0.1f);
				textValue [LetterPositions.Length].text = "OF COURSE I'M ASIAN xD";
				source.PlayOneShot (Success);
				source.PlayOneShot (Cheer);
				StartCoroutine(EndLevel());

			}
			else {
				textValue [LetterPositions.Length].color = new Color (1f, 0f, 0f);
				textValue [LetterPositions.Length].text = "WRONG!";
			}
		}
	}

	IEnumerator EndLevel(){

		yield return new WaitForSeconds (3);
		Application.LoadLevel("World3");

	}
}
