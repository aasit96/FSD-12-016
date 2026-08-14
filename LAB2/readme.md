# File system (FS Module)
FS Module directly communicate with operating system rather than brower.the common operation of file or folder are :
1-File->read file,write file,delete file
2-Folder->mkdr/md , rdir/rm , readdir
3-File Metadat-> stat, lstat , rstat.
4-watch-> watch , unwatch
5-Stream ->readstream(), writestream()
All function are promise so it must be called with await
# CRUD Project
C-create

R-retrieve

U-update

D-delete

assume we are making a cart related project

1.user can add any product (id,name,orice,qty) into cart
2.user can see all the items of cart
3.user can remove item from cart
4.user can also update quamtity of project
5.all the items should be stored after termination of project