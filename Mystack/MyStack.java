package b;

public class MyStack {
        public static void main(String[] args) {
            LinkedStack<String> reader = new LinkedStack<String>();
           String []str={"a","b","c","d"};
            for(String s : str)
               reader.push(s);
            String s ;
            System.out.println(reader.top());
            while((s=reader.pop())!= null)
                System.out.println(s);
            System.out.println(reader.top());
    }
}
