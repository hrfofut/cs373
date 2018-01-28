#!/usr/bin/env python3

# pylint: disable = bad-whitespace
# pylint: disable = invalid-name
# pylint: disable = missing-docstring

# ---------
# StrCmp.py
# ---------

if __name__ == "__main__" : # pragma: no cover
    print("StrCmp.py")
    assert strcmp("",    "")    ==  0
    assert strcmp("abc", "abc") ==  0
    assert strcmp("abc", "aba") ==  1
    assert strcmp("aba", "abc") == -1
    assert strcmp("abc", "ab")  ==  1
    assert strcmp("ab",  "abc") == -1
    print("Done.")
