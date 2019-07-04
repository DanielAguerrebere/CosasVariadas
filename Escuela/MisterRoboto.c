#define mov 2
#typedef signed char uint_8;

int main(void)
{
	uint_8 PosX = 0;	//Position in x
	uint_8 PosY = 0;	// Position in Y
	uint_8 PosArray[4] = {'U','D','R','L'};	//Value in the PosArray
	unit_8 bSize = 7;

	for (size_t i = 0; i < bSize; i++) {
		switch (*PosArray) {
			case 'U':
			PosY += 1;
			break;
			case 'D':
			PosY -= 1;
			break;
			case 'R':
			PosX += 1;
			break;
			case 'L':
			PosX -= 1;
			break;
		}
		PosArray++;
	}

	(PosX == 0 && PosY == 0)?1:0;
}
