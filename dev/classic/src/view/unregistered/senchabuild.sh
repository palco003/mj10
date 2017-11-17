#!/bin/bash
cd ../../../..
sencha app build classic testing
sudo cp -r build/testing/* ../
cd classic/src/view/unregistered