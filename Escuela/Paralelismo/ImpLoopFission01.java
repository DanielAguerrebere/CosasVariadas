public class ImpLoopFission01{

	static double []a;
	static double []b;

  private static class Worker extends Thread{
    int startThread;
    int endThread;

    public Worker (int start, int end){
      startThread = start;
      endThread = end;
    }

    public void run(){

      for (int i = startThread; i < endThread; i++) {
        if (b[i]) > 0.0 {
          a[i] = 2.0 * b[i];
        }else
          a[i] = 2.0 * Math.abs(b[i]);
      }
    }
  }

  private static class Worker2 extends Thread{
    int startThread;
    int endThread;

    public Worker2 (int start, int end){
      startThread = start;
      endThread = end;
    }

    public void run(){
      for (int i = startThread; i < endThread; i++) {
        b[i] = a[i-1];
      }
    }
  }

	public static void main(String []args){

  	int N = 100000000;
		a = new double[N];
		b = new double[N];

    Thread thread1 = new Worker(1,N/2);
    Thread thread2 = new Worker2((N/2),N);

    thread1.start();
    thread2.start();

    try {
      thread1.join();
      thread2.join();
    } catch(Exception e) {
      e.printStackTrace();
    }

		for(int i= 0; i < N; i++){
			a[i] = 0.0 + i;
			b[i] = 0.0 + i;
		}

		for(int i = 1; i < N; i++){
			if(b[i] > 0.0)					//Paralelizable
				a[i] = 2.0 * b[i];			//Paralelizable
			else							//Paralelizable
				a[i] = 2.0 * Math.abs(b[i]);//Paralelizable

			b[i] = 	a[i-1];			//Dependencia por i-1
		}

		System.out.println("Saliendo del programa");
	}
}


//fork threads
//{
//divide work among threads
//for (i = 1; i < N; i++) {
// if (b[i] > 0.0) a[i] = 2.0 * b[i];
// else a[i] = 2.0 * fabs(b[i]);
//}
//join threads (barrier reached)
//fork threads
//for (i = 1; i < N; i++) {
// b[i] = a[i-1];
//}
//join threads (barrier reached)
//}
