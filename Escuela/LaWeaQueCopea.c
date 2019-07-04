#define uint_8 unsigned char;

int main(void){
  unit_8 SrcArray[50] = {10}; //All start with a value of 10
  unit_8 DestArray[50] = {15}; //All start with a value of 15
  unit_8 bSize = 50; //Same value that the array size
  return 0;
}

void vfnCopyMemory(unit_8 *bpSource, unit_8 *bpDestination, unit_8 bSize) {
  for (size_t i = 0; i < bSize; i++) { // Look up to all elements in the SrcArray
    *bpDestination = *bpSource; //Set the value of SrcArray to DestArray
    bpSource++; //Move to the next element in the SrcArray
    bpDestination++  // Move to the next element int the DestArray
  }
}
