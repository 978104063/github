package b;

public class LinkedStack<T> {
    //定义一个内部类
    private static class Node<U> {
        U item;//存入的数据
        Node<U> next;//节点类，指向下一个节点。相当于指针的作用。

        Node() {
            item = null;
            next = null;
        }//重写无参的构造方法

        Node(U item, Node<U> next) {//重写带参构造方法，参数分别是入栈的数据和下一个结点的数据。
            this.item = item;
            this.next = next;
        }

        boolean end() {
            return item == null && next == null;
        }//判断是否到末端结点
    }

    private Node<T> top = new Node<T>(); // 初始化末端结点。

    public void push(T item) {//入栈
        top = new Node<T>(item, top);
    }

    //出栈
    public T pop() {
        T result = top.item;
        if (!top.end())//判断是否到末端结点
            top = top.next;//将下一个节点作为末端结点
        return result;
    }
    public  T  top(){
       return top.item;
    }
}