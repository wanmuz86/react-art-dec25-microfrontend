// to declare the type of "Qiankun configuration on main.tsx"
//  you are extending the window object for Qiankun globals.

interface Window {
 __POWERED_BY_QIANKUN__?: boolean;
 __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
 'micro-app'?: {
   bootstrap: () => Promise<void>;
   mount: (props: any) => Promise<void>;
   unmount: () => Promise<void>;
 };
}
// Define the props data type for Qiankun
interface MicroAppProps {
  initialData?: {
    message:string
  },
  onDataReceived?:(data:any)=> void
}